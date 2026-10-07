# SkillForge Spring Boot API
Create a Spring Boot project with:
- Spring Web
- Spring Data JPA
- MySQL Driver
- Spring Security
- Validation

Suggested packages:
controller, service, repository, entity, dto, security

Payment flow:
1. Create order on backend.
2. Generate Razorpay order.
3. Return order ID to React.
4. Open Razorpay Checkout.
5. Verify payment signature on backend.
6. Create purchase record.
