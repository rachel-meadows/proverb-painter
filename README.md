# To run locally:
1. cd proverb-painter.Server
2. dotnet restore
3. dotnet run

# Notes for future me:
ORM is entity framework core with code-first migrations.
Run Update-Database in Package Manager Console while sorting out data flows (Remove-Migration then Add-Migration Initial as needed).

Re-running migrations:
1. Stop application. Open Nuget Package Manager Console.
2. `Add-Migration Initial` (or any other name)
3. `Update-Database`