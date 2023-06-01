int analogPin = A0;
int speed = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  speed = analogRead(analogPin);

  Serial.println(speed);
}
