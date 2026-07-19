# Security Policy & Architecture

This document describes the security model of the Kawerify Tech Passwords utility.

## Cryptographically Secure Random Number Generation

This utility uses the Web Cryptography API (`window.crypto.getRandomValues`) to generate random passwords. Unlike standard pseudo-random number generators (such as `Math.random()`), the Web Crypto API utilizes the underlying operating system's entropy source, providing high-entropy, cryptographically strong random values suitable for security-sensitive applications.

## Zero-Server storage (Client-Side Only)

No data generated or typed on this website is ever transmitted to a remote server.
- Passwords are generated entirely within your local browser sandbox.
- When you click "Save Password", it is stored in your browser's local storage database (`LocalStorage`).
- The source code is compiled to static HTML, CSS, and JS. There is no backend server or database that can be hacked, compromised, or monitored.

## Local Storage Considerations

Since saved passwords are stored in your browser's `LocalStorage`:
- Clearing your browser cache or site data will delete your saved passwords.
- Anyone with physical access to your device (and browser profile) could potentially view your saved passwords. Use the **eye toggle** to hide credentials in the drawer, but always log out of public computers and secure your personal devices with a lock screen.
