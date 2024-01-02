-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'ADMIN', 'DEPARTMENT');

-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'DEPARTMENT';

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'STUDENT';
