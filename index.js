//1
knex('students')
.where('id', 1)

//2
knex('students')
.where('gpa', 3)
.limit(1)

//3
knex('students')
.count()

//4
knex('students')
.max('gpa')

//5
knex('students')
.whereNotNull('name')

//6
knex('students')
.whereIn('id', [1, 2, 3])
.orWhereIn('gpa', [3, 4])

//7
knex('students')
.limit(10)
.offset(30)

//8
knex('students')
.insert({name: 'Prince', fav_color: 'purple'})

//9
knex('students')
.returning('*')
.insert({name: 'Liz', fav_color: 'blue'})

//10
knex('students')
.where('id', 5)
.update('name', 'Cho')

//11
knex('students')
.where('gpa', 0)
.del()

//12
knex('students')
.where('id', 4)
.increment('gpa', 1)

//13
knex('students')
.join('homeworks', 'homeworks.student_id', '=', 'students.id')

//14
knex('students')
.distinct('students.name', 'homework.title', 'grades.score')
.join('homeworks', 'homeworks.student_id', '=', 'students.id')
.join('grades', 'grades.id', '=', 'homeworks.grade_id')
.where('grades.score', '>', '3')

//How would you use a method like 'pluck()?'
/* pluck() grabs an entire column of values and returns a promise that resolves to an array of those values. This allows you to get a column of values and use .then() to manipulate them. */

//How would you use a method like raw()?
/* I would use .raw() to run a [for lack of a better word] normal sql command, as in knex('students').raw('SELECT * FROM students'); I think. */
