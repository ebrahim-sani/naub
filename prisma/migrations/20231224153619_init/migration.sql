-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "matricNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "otherName" TEXT,
    "isStudent" BOOLEAN NOT NULL DEFAULT true,
    "department" TEXT NOT NULL,
    "programme" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "modeOfEntry" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "lga" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "hairColor" TEXT NOT NULL,
    "tribe" TEXT NOT NULL,
    "tribalMark" TEXT NOT NULL,
    "bloodGroup" TEXT NOT NULL,
    "genotype" TEXT,
    "password" TEXT NOT NULL,
    "nextOfKinFirstName" TEXT NOT NULL,
    "nextOfKinLastName" TEXT NOT NULL,
    "nextOfKinPhoneNumber" TEXT NOT NULL,
    "nextOfKinRelationship" TEXT NOT NULL,
    "nextOfKinAddress" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registerCourse" (
    "id" TEXT NOT NULL,
    "registeredTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "studentId" TEXT,
    "semester" TEXT NOT NULL,
    "session" TEXT NOT NULL,
    "level" TEXT NOT NULL,

    CONSTRAINT "registerCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseRegisteration" (
    "id" TEXT NOT NULL,
    "specialId" TEXT NOT NULL,
    "courseCode" TEXT NOT NULL,
    "courseTitle" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "courseStatus" TEXT NOT NULL,
    "preReq" TEXT,
    "registerCourseId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "courseCode" TEXT NOT NULL,
    "courseTitle" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "courseStatus" TEXT NOT NULL,
    "preReq" TEXT,
    "departmentId" TEXT,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "departmentName" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "profilePicture" TEXT,
    "password" TEXT NOT NULL,
    "isDepartment" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_matricNumber_key" ON "Student"("matricNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_phoneNumber_key" ON "Student"("phoneNumber");

-- CreateIndex
CREATE INDEX "Student_matricNumber_idx" ON "Student"("matricNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Student_matricNumber_email_key" ON "Student"("matricNumber", "email");

-- CreateIndex
CREATE UNIQUE INDEX "CourseRegisteration_specialId_key" ON "CourseRegisteration"("specialId");

-- CreateIndex
CREATE UNIQUE INDEX "Course_courseCode_key" ON "Course"("courseCode");

-- CreateIndex
CREATE UNIQUE INDEX "Course_courseTitle_key" ON "Course"("courseTitle");

-- CreateIndex
CREATE INDEX "Course_courseTitle_courseCode_idx" ON "Course"("courseTitle", "courseCode");

-- CreateIndex
CREATE UNIQUE INDEX "Department_departmentName_key" ON "Department"("departmentName");

-- CreateIndex
CREATE INDEX "Department_departmentName_idx" ON "Department"("departmentName");

-- AddForeignKey
ALTER TABLE "registerCourse" ADD CONSTRAINT "registerCourse_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseRegisteration" ADD CONSTRAINT "CourseRegisteration_registerCourseId_fkey" FOREIGN KEY ("registerCourseId") REFERENCES "registerCourse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;
