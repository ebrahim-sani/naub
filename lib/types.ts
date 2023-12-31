import { z } from "zod";

const Student = z.object({
   id: z.string(),
   matricNumber: z.string(),
   firstName: z.string(),
   lastName: z.string(),
   otherName: z.string().nullable(),
   isStudent: z.boolean(),
   department: z.string(),
   programme: z.string(),
   faculty: z.string(),
   modeOfEntry: z.string(),
   level: z.string(),
   profilePicture: z.string(),
   gender: z.string(),
   dateOfBirth: z.string(),
   email: z.string(),
   phoneNumber: z.string(),
   country: z.string(),
   state: z.string(),
   lga: z.string(),
   address: z.string(),
   town: z.string(),
   maritalStatus: z.string(),
   religion: z.string(),
   hairColor: z.string(),
   tribe: z.string(),
   bloodGroup: z.string(),
   genotype: z.string().nullable(),
   password: z.string(),
   nextOfKinFirstName: z.string(),
   nextOfKinLastName: z.string(),
   nextOfKinPhoneNumber: z.string(),
   nextOfKinRelationship: z.string(),
   nextOfKinAddress: z.string(),

   coursesRegistered: z.array(z.lazy(() => RegisterCourse)),
});

const RegisterCourse = z.object({
   id: z.string(),
   registeredTime: z.date(),
   studentId: z.string().nullable(),
   semester: z.string(),
   session: z.string(),
   level: z.string(),
   courses: z.array(z.lazy(() => Course)),
});

const CourseRegisteration = z.object({
   id: z.string(),
   specialId: z.string(),
   courseCode: z.string(),
   courseTitle: z.string(),
   department: z.string(),
   level: z.string(),
   unit: z.string(),
   courseStatus: z.string(),
   preReq: z.string().nullable(),
   registerCourseId: z.string(),
});

const Course = z.object({
   id: z.string(),
   courseCode: z.string(),
   courseTitle: z.string(),
   department: z.string(),
   level: z.string(),
   unit: z.string(),
   courseStatus: z.string(),
   preReq: z.string().nullable(),
});

export type StudentProps = z.infer<typeof Student> | null | undefined;
export type CourseRegProps =
   | z.infer<typeof CourseRegisteration>
   | null
   | undefined;
export type CourseProps = z.infer<typeof Course> | null | undefined;
export type RegCourseProps = z.infer<typeof RegisterCourse> | null | undefined;
