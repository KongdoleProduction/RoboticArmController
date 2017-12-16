/*
 * shield.ino
 *
 * Arduino Uno shiled source code
 *
 * read 6 potentiometor values and
 * control each servo
 *
 * Maintainer: Ray Suhyun Lee(raysuhyunlee@gmail.com)
 */

#include <Servo.h>

#define SERVO_NUM 6
#define POTEN_NUM 6

/* 
 * you may modify these two values
 * if your servos use different pwm range
 */
#define PWM_MIN 1000
#define PWM_MAX 2000

#define POTEN_MARGIN 250

Servo servos[SERVO_NUM];
unsigned char potens[POTEN_NUM] = {
  A0, A1, A2, A3, A4, A5
};

void setup() {
  /* attach digital pin 2~7 to each servo */
  for (int i = 0; i < SERVO_NUM; i++) {
    servos[i].attach(2 + i);
    delay(20);
  }
}

void loop() {
  unsigned short poten_values[POTEN_NUM];

  /* read each potentiometor value */
  for (int i=0; i<POTEN_NUM; i++) {
    poten_values[i] = analogRead(potens[i]);
  }

  /* send angle signal to each servo */
  for (int i=0; i<SERVO_NUM; i++) {
    unsigned short buf = map(poten_values[i], 
        0 + POTEN_MARGIN, 1024 - POTEN_MARGIN, PWM_MIN, PWM_MAX);
    buf = constrain(buf, PWM_MIN, PWM_MAX);
    servos[i].writeMicroseconds(buf);
  }
}
