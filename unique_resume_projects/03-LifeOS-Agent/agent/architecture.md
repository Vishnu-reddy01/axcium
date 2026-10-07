# Agent Architecture

User Request
   |
Intent Router
   |
Planner Agent
   |
+----------+-----------+-----------+
| Gmail    | Calendar  | File Search|
+----------+-----------+-----------+
   |
Action Validator
   |
Human Confirmation
   |
Action Executor
   |
Result + Memory

Recommended implementation:
- Spring Boot API gateway
- LangGraph for orchestration
- PostgreSQL for persistent memory
- Redis for jobs
- OAuth2 for Gmail/Calendar
- RAG for personal documents

Never allow irreversible external actions without confirmation.
