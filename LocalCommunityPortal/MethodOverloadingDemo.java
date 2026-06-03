public class MethodOverloadingDemo {

    // Method with two integers
    static int add(int a, int b) {
        return a + b;
    }

    // Method with two doubles
    static double add(double a, double b) {
        return a + b;
    }

    // Method with three integers
    static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {

        System.out.println("Sum of two integers: " + add(10, 20));
        System.out.println("Sum of two doubles: " + add(10.5, 20.5));
        System.out.println("Sum of three integers: " + add(10, 20, 30));
    }
}