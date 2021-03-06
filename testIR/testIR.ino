#include <IRremote.h>

IRrecv receiver(2); // receiver is connected to pin2
IRsend sender;
decode_results results;

long repetitions;
long count;
unsigned int durations[100];
void (*reset)(void) = 0;

void setup() {
  Serial.begin(9600);
  receiver.enableIRIn(); // start receiving signals
}

void loop() {

  // check for text from the PC
  // the PC sends a string containing "r,n,a,b,c,d,e,..." where r is how many times to repeat the command,
  // n is the number of durations, and a/b/c/d/e/... are the durations.
  // the durations are how long each mark and space period of an infrared command should last, in microseconds.
  if(Serial.available()) {

    // parse the text
    repetitions = Serial.parseInt();
    count = Serial.parseInt();
    for(int i = 0; i < count; i++)
      durations[i] = Serial.parseInt();

    // send the command using 40kHz PWM
    for(int i = 0; i < repetitions; i++) {
      sender.sendRaw(durations, count, 40);
      delay(50);
    }

    // for a bit of fault tolerance, reset the arduino after receiving any command
    reset();
    
  }

  // check if a decoded infrared signal is available
  if(receiver.decode(&results)) {
    Serial.println(results.value, HEX);
    Serial.print(results.rawlen - 1);
    for(int i = 1; i < results.rawlen; i++) {
      unsigned int number = results.rawbuf[i] * USECPERTICK;
      Serial.print(",");
      Serial.print(number);
    }
    Serial.println("");
    receiver.resume();
  }
  
}
