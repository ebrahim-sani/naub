/*
  Warnings:

  - You are about to drop the column `registerCourseId` on the `Course` table. All the data in the column will be lost.
  - Added the required column `registerCourseId` to the `CourseRegisteration` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_registerCourseId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "registerCourseId";

-- AlterTable
ALTER TABLE "CourseRegisteration" ADD COLUMN     "registerCourseId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CourseRegisteration" ADD CONSTRAINT "CourseRegisteration_registerCourseId_fkey" FOREIGN KEY ("registerCourseId") REFERENCES "registerCourse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
