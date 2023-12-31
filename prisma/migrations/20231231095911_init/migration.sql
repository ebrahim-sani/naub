/*
  Warnings:

  - You are about to drop the column `departmentId` on the `Course` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_departmentId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "departmentId";
