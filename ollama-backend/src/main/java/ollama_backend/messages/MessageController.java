package ollama_backend.messages;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

// Controller class to handle HTTP message requests to Ollama Backend

@RestController
@RequestMapping("/messages")
public class MessageController {

    RestClient restClient = RestClient.create();

    @GetMapping("/health")
    public String health() {
        return "Ollama Message Controller is healthy!";
    }

    @GetMapping("/ask")
    public String sendMessages() {

        Map<String, Object> payload = new HashMap<>();

        payload.put("model", "qwen3:8b");
        payload.put("prompt", "Hello");
        payload.put("stream", false);

        String response = restClient.post()
                .uri("http://localhost:11434/api/generate")
                .contentType(MediaType.APPLICATION_JSON)
                .body(payload)
                .retrieve()
                .body(String.class);

        System.out.println("Response from Ollama Backend: " + response);

        return response;
    }

}
