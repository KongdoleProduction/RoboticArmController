import socket

port = 3000
host = "0.0.0.0"
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((host, port))
s.listen(1)
print("server running at {}:{}".format(host, port))

def receive_data(client):
    chunks = []
    bytes_recvd = 0
    MSG_LEN = 100
    while bytes_recvd < MSG_LEN:
        chunk = client.recv(MSG_LEN)
        if chunk == 'b':
            raise RuntimeError('socket connection broken')
        chunks.append(chunk)
        bytes_recvd += len(chunk)

while True:
    client, addr = s.accept()
    print("joystick client connected from {}:{}".format(addr[0], addr[1]))

    receive_data(client)

