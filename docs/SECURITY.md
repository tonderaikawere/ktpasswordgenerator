# Security Policy

This document details the security practices, vulnerability reporting procedures, and browser safety guidelines for the Kawerify Tech Passwords utility.

---

## 1. Supported Versions

We only provide security patches for the latest released version of this application.

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |
| < 1.0   | :x:                |

## 2. Reporting a Vulnerability

If you discover a security vulnerability in this utility, please do not open a public GitHub issue. Instead, report it privately to the Kawerify Tech team to ensure responsible disclosure.

- **Vulnerability Reporting Email**: security@kawerifytech.com
- **Response SLA**: The security team aims to review and reply to all vulnerability disclosures within **48 hours**, providing a plan for resolving the issue if verified.
- **Coordinated Disclosure**: We ask that you do not publish details of the vulnerability until we have patched the issue and updated the repository.

## 3. Cryptographic Implementation Details

- **PRNG**: The random values are fetched using the browser's hardware-backed cryptographic seed (`window.crypto.getRandomValues`).
- **Data Isolation**: This application does not contain code that reads or transmits inputs/outputs to external servers. It has zero backend code.
- **Content Security Policy (CSP)**: We recommend deploying this application with strict CSP headers that block connections to untrusted domains, preventing third-party script injections.

## 4. Local Cache Security Recommendations

Since passwords saved in this app reside in your browser's local cache (`LocalStorage`):
- Avoid saving passwords when using shared, public, or school computers.
- Regularly audit and delete saved passwords when they are no longer needed.
- Protect your personal computer and mobile device profiles with high-entropy unlock codes to prevent local cache extraction.
