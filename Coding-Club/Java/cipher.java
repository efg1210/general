import java.util.Scanner;

public class cipher {
    
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        System.out.println("What text do you want changed");
        String message = sc.nextLine();
        
        System.out.println("Code or decode c/d");
        String direction = sc.next();

        System.out.println("What is the cipher key (number, preferably between 1 and 25)");
        int key = sc.nextInt();
        
        sc.close();
        
        if(direction.equals("d")){
            key *= -1;
        }
        
        String encryptedMessage = "";
        encryptedMessage += encodeMessage(message, key);
        System.out.println(encryptedMessage);
   }

    public static String encodeMessage(String message, int key){
        String ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String alphabet = "abcdefghijklmnopqrstuvwxyz";
        String encryptedResult = "";
        
        for(int i = 0; i < message.length(); i++){
            
            char originalCharacter = message.charAt(i);

            if(ALPHABET.indexOf(originalCharacter) >= 0){
                int alphabeticIndex = ALPHABET.indexOf(originalCharacter);
                if(alphabeticIndex >= 0){
                    int newIndex = alphabeticIndex + key;
                    newIndex = newIndex % ALPHABET.length();
                    char newCharacter = ALPHABET.charAt(newIndex);
                    encryptedResult += Character.toString(newCharacter);
                }
            }else if(alphabet.indexOf(originalCharacter) >= 0){
                int alphabeticIndex = alphabet.indexOf(originalCharacter);
                if(alphabeticIndex >= 0){
                    int newIndex = alphabeticIndex + key;
                    newIndex = newIndex % alphabet.length();
                    char newCharacter = alphabet.charAt(newIndex);
                    encryptedResult += Character.toString(newCharacter);
                }
            }else{
                encryptedResult += Character.toString(originalCharacter);
            }
        }
        return encryptedResult;
    }
}