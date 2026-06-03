public class PatternMatchingSwitch {

    public static void checkType(Object obj) {

        String result = switch (obj) {
            case Integer i -> "Integer value: " + i;
            case String s -> "String value: " + s;
            case Double d -> "Double value: " + d;
            case Boolean b -> "Boolean value: " + b;
            case null -> "Object is null";
            default -> "Unknown type: " + obj.getClass().getSimpleName();
        };

        System.out.println(result);
    }

    public static void main(String[] args) {

        checkType(100);
        checkType("Hello Java");
        checkType(45.67);
        checkType(true);
        checkType(null);
    }
}