-- 1. Create a new SQL login for your app
IF NOT EXISTS(SELECT name FROM sys.server_principals WHERE name = 'portfolio_user')
BEGIN
    CREATE LOGIN portfolio_user WITH PASSWORD = 'YourPassword123';
    PRINT 'Login portfolio_user created successfully';
END
ELSE
    PRINT 'Login portfolio_user already exists';
GO

-- 2. Create database
IF NOT EXISTS(SELECT name FROM sys.databases WHERE name = 'Portfolio')
BEGIN
    CREATE DATABASE Portfolio;
    PRINT 'Database Portfolio created successfully';
END
ELSE
    PRINT 'Database Portfolio already exists';
GO

-- 3. Switch to Portfolio database
USE Portfolio;
GO

-- 4. Create database user
IF NOT EXISTS(SELECT name FROM sys.database_principals WHERE name = 'portfolio_user')
BEGIN
    CREATE USER portfolio_user FOR LOGIN portfolio_user;
    PRINT 'Database user portfolio_user created successfully';
END
ELSE
    PRINT 'Database user portfolio_user already exists';
GO

-- 5. Grant full permissions (for development)
ALTER ROLE db_owner ADD MEMBER portfolio_user;
PRINT 'db_owner permissions granted to portfolio_user';
GO

-- 6. Create Messages table (drop if exists and recreate)
IF EXISTS(SELECT * FROM sys.tables WHERE name = 'Messages')
BEGIN
    DROP TABLE dbo.Messages;
    PRINT 'Existing Messages table dropped';
END

CREATE TABLE dbo.Messages (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL,
    Message NVARCHAR(MAX) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE()
);
PRINT 'Messages table created successfully';
GO

-- 7. Test insert as current user (Windows auth)
INSERT INTO dbo.Messages (Name, Email, Message) 
VALUES ('Test from Windows Auth', 'win@test.com', 'This message was inserted via Windows authentication');

-- 8. Verify the data
SELECT * FROM dbo.Messages;
GO

-- 9. Verify login exists and is enabled
SELECT name, type_desc, is_disabled 
FROM sys.server_principals 
WHERE name = 'portfolio_user';
GO

-- Check login status and properties
SELECT 
    name, 
    type_desc,
    is_disabled,
    default_database_name
FROM sys.server_principals 
WHERE name = 'portfolio_user';
GO

-- Reset the password and enable the login
ALTER LOGIN portfolio_user WITH PASSWORD = 'rohit_reji', CHECK_POLICY = OFF;
ALTER LOGIN portfolio_user ENABLE;
PRINT 'Password reset and login enabled';
GO

-- Switch to Portfolio database and verify user mapping
USE Portfolio;
GO

SELECT 
    dp.name AS database_user,
    sp.name AS server_login,
    dp.type_desc
FROM sys.database_principals dp
LEFT JOIN sys.server_principals sp ON dp.sid = sp.sid
WHERE dp.name = 'portfolio_user';
GO

USE Portfolio;
SELECT * FROM dbo.Messages ORDER BY CreatedAt DESC;