import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css'
})
export class ChatPageComponent {

  private http = inject(HttpClient);

  // Placeholder list of messages
  messages: string[] = []

  is_loading: boolean = false;

  // Allow the user to press Enter to send a message, and Shift + Enter to create a new line
  handleKeyDown(event: KeyboardEvent, input: HTMLTextAreaElement): void {
    if (event.shiftKey || event.key !== 'Enter') {
      return;
    }

    event.preventDefault();

    this.sendMessageFromInput(input);
  }

  // Helper function to trim and check for empty messages
  sendMessageFromInput(input: HTMLTextAreaElement): void {
    const message = input.value.trim();

    if (!message || this.is_loading) {
      return;
    }

    input.value = '';
    this.sendMessage(message);
  }

  // Function to send message to ollama API
  sendMessage(message: string): void {

    const payload = {
      model: "qwen3:8b",
      prompt: message,
      stream: false
    };

    this.is_loading = true;

    this.http.post<any>(
      'http://localhost:11434/api/generate',
      payload
    ).subscribe({
      next: (response) => {
        this.is_loading = false;
        this.messages.push(response.response);
      },
      error: (err) => {
        console.error('Error sending message:', err);
        this.is_loading = false;
      }
    });
  }

}
