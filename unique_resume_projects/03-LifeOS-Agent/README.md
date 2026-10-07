# LifeOS Agent
A personal AI agent that reduces repetitive daily work by connecting tasks, email, calendar, files and reminders.

## Unique idea
Instead of being a chatbot, LifeOS plans and executes multi-step daily workflows.

Example:
"Prepare me for tomorrow's interview."

Agent:
1. Checks calendar.
2. Finds the relevant resume.
3. Searches notes.
4. Creates a preparation checklist.
5. Schedules revision blocks.
6. Produces a morning briefing.

## Stack
React + Spring Boot + PostgreSQL + Redis + LangGraph/LangChain + Gmail/Calendar connectors.

## Safety
Actions such as sending emails or changing calendar events should require user confirmation.
