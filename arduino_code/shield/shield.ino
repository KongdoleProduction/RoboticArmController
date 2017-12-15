#include <Servo.h>

#define SERVO_NUM 6
#define POTEN_NUM 6
Servo servos[SERVO_NUM];
unsigned char potens[POTEN_NUM] = {
  A0, A1, A2, A3, A4, A5
};

void setup() {
  // put your setup code here, to run once:
  for (int i = 0; i < SERVO_NUM; i++) {
    servos[i].attach(2 + i);
    delay(20);
  }
  Serial.begin(9600);
}

void loop() {
  Serial.println(analogRead(A0));
  // put your main code here, to run repeatedly:
  unsigned short poten_values[POTEN_NUM];
  for (int i=0; i<POTEN_NUM; i++) {
    unsigned short tmp = analogRead(potens[i]);
    poten_values[i] = map(tmp, 0+250, 1024-250, 1000, 2000);
    poten_values[i] = constrain(poten_values[i], 1000, 2000);
  }

  for (int i=0; i<SERVO_NUM; i++) {
    servos[i].writeMicroseconds(poten_values[i]);
  }
}
