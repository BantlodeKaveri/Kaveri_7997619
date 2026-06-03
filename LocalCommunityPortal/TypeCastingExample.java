public class TypeCastingExample {
    public static void main(String[] args) {

        double d = 45.67;
        int i = (int) d; // double to int

        int num = 100;
        double d2 = (double) num; // int to double

        System.out.println("Original double value: " + d);
        System.out.println("Double to int: " + i);

        System.out.println("Original int value: " + num);
        System.out.println("Int to double: " + d2);
    }
}