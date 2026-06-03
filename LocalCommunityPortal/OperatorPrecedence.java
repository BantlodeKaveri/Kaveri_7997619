public class OperatorPrecedence {
    public static void main(String[] args) {

        int result1 = 10 + 5 * 2;
        int result2 = (10 + 5) * 2;
        int result3 = 20 - 4 / 2 + 3;

        System.out.println("Result of 10 + 5 * 2 = " + result1);
        System.out.println("Result of (10 + 5) * 2 = " + result2);
        System.out.println("Result of 20 - 4 / 2 + 3 = " + result3);

        System.out.println("\nExplanation:");
        System.out.println("1. Multiplication and Division are performed before Addition and Subtraction.");
        System.out.println("2. Parentheses have the highest precedence.");
        System.out.println("3. Operators with the same precedence are evaluated from left to right.");
    }
}