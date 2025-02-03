# Node.js Unhandled Exception Handling

This repository demonstrates a common issue in Node.js applications: unhandled exceptions causing server crashes without proper error logging or graceful shutdown.  The `bug.js` file showcases the problem, while `bugSolution.js` provides a corrected version with improved exception handling.

## Bug Description
The original code lacks a mechanism to catch and handle unhandled exceptions. This leads to the server crashing unexpectedly if an error occurs during request processing.

## Solution
The solution involves using the `process.on('uncaughtException')` event listener to gracefully handle these exceptions, logging the error, and optionally performing cleanup tasks before exiting the process. This prevents unexpected crashes and provides valuable debugging information.