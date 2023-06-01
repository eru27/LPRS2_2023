#include <LiquidCrystal.h>

LiquidCrystal lcd(8, 9, 4, 5, 6, 7);

const int pwm = 2; 
int i = 0;

void setup() {
  // put your setup code here, to run once:
  lcd.begin(16, 2);              // start the library
  lcd.setCursor(0,0);
  int speedInt = 69;
  lcd.print(speedInt); // print a simple message
  pinMode(pwm, OUTPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
  analogWrite(pwm,25) ; 		 //setting pwm to 25 
     delay(50) ; 			//delay of 50 ms
     analogWrite(pwm,50) ; 	
     delay(50) ; 
  analogWrite(pwm,75) ; 
     delay(50) ; 
     analogWrite(pwm,100) ; 
     delay(50) ; 
     analogWrite(pwm,125) ; 
     delay(50) ; 
     analogWrite(pwm,150) ; 
     delay(50) ; 
     analogWrite(pwm,175) ; 
     delay(50) ;
     analogWrite(pwm,200) ; 
     delay(50) ; 
     analogWrite(pwm,225) ; 
     delay(50) ; 
     analogWrite(pwm,250) ; 
}
