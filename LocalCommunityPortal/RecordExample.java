import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

// Record definition
record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {

        // Create record instances
        Person p1 = new Person("Kaveri", 21);
        Person p2 = new Person("Ravi", 17);
        Person p3 = new Person("Priya", 25);

        // Print records
        System.out.println("Person Records:");
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);

        // Store records in a list
        List<Person> people = Arrays.asList(p1, p2, p3);

        // Filter people whose age is 18 or above
        List<Person> adults = people.stream()
                                    .filter(person -> person.age() >= 18)
                                    .collect(Collectors.toList());

        System.out.println("\nAdults (Age >= 18):");
        adults.forEach(System.out::println);
    }
}