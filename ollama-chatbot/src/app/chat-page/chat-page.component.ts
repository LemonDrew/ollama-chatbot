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
  messages: string[] = [
    "Hello! How can I assist you today?",
    "I'm here to help with any questions you have.",
    "Hi, can you help me with this question?"
  ]

  is_loading: boolean = false;

  sendMessage(message: string): void {
    console.log('Send message button clicked');
    console.log('Message:', message);

    // Make a http request to the backend API
    this.is_loading = true;
    this.http.post('http://localhost:3000/api/send-message', { message })
      .subscribe(
        (response: any) => {
          console.log('Response from backend:', response);
          // Handle the response from the backend
          this.is_loading = false;
        },
        (error: any) => {
          console.error('Error sending message:', error);
          // Handle the error
        }
      );
  }

}
