import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class CashGrowApplication {

    public static void main(String[] args) {
        SpringApplication.run(CashGrowApplication.class, args);
    }
}

@RestController
class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to CashGrow";
    }
}

@RestController
class TaskController {

    @GetMapping("/tasks")
    public String getTasks() {
        // Logic to retrieve tasks from a database or other source
        return "Task 1, Task 2, Task 3";
    }
}

@RestController
class ContactController {

    @GetMapping("/contact")
    public String getContactInfo() {
        return "Email: info@cashGrow.in";
    }
}
