package ollama_backend.messages;

public class MessageRequest {
    private String content;

    public MessageRequest(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }
}