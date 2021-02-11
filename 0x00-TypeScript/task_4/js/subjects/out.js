var Subjects;
(function (Subjects) {
    class React extends Subject {
        getRequirements() {
            return "Here is the list of requirements for React";
        }
        getAvailableTeacher() {
            if (this.teacher.experienceTeachingReact === undefined) {
                return "No available teacher";
            }
            else {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
        }
    }
    Subjects.React = React;
})(Subjects || (Subjects = {}));
