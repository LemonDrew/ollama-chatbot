package ollama_backend.images;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
public class ImageController {
    
    @GetMapping ("/images")
    public String index() {
        return "Greetings from Spring Boot!";
    }
    
}
