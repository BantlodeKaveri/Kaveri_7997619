import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaSortExample {
    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Kaveri");
        names.add("Ravi");
        names.add("Anil");
        names.add("Priya");
        names.add("Sita");

        Collections.sort(names, (s1, s2) -> s1.compareTo(s2));

        System.out.println("Sorted List:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}