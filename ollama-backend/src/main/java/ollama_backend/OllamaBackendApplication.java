package ollama_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController 
@SpringBootApplication
public class OllamaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(OllamaBackendApplication.class, args);
	}
	

	@GetMapping("/")
	public RedirectView redirectToSwagger() {
		return new RedirectView("/health");
	}

	@GetMapping ("/health")
	public String health() {
		return "Overall Backend is healthy!";
	}

}
