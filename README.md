
# Video Conferencing Example between a Proctor and a List of Students using WebRTC

## Introduction

This project demonstrates a simple video conferencing system using WebRTC, where a proctor can connect with multiple students for remote communication.

## Usage

### Running the Server

To run the server, follow these steps:

1. Install the required dependencies by running the following command:
   
   ```bash
   pnpm install
   ```

2. Start the server with the following command:
   
   ```bash
   pnpm start
   ```

### Running the Client

To run the client, you can use any static server to serve the HTML files provided:

1. Navigate to the `proctor.html` and `student.html` files in your project directory.

2. Use any static server of your choice (e.g., Python's built-in HTTP server) to serve these HTML files locally.

   For example, using Python's HTTP server:
   
   ```bash
   python3 -m http.server
   ```

3. Open the respective HTML files in your web browser.

### Enjoy

You can now enjoy the video conferencing system by connecting as a proctor and one or more students.

