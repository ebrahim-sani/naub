/*
  Warnings:

  - You are about to drop the column `registerCourseId` on the `CourseRegisteration` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CourseRegisteration" DROP CONSTRAINT "CourseRegisteration_registerCourseId_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "registerCourseId" TEXT;

-- AlterTable
ALTER TABLE "CourseRegisteration" DROP COLUMN "registerCourseId";

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_registerCourseId_fkey" FOREIGN KEY ("registerCourseId") REFERENCES "registerCourse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
