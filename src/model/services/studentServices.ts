import {Student} from '../types/Student.js';
import {db, connectionData} from "../../config.js";
import {OkPacket, RowDataPacket} from "mysql2";
import {LooseObject} from '../types/LooseObject.js';
import {buildPatchQuery} from '../../utils/buildPatchQuery.js';
import mysqlPromise from "mysql2/promise";

function createStudent(student: Student, id_user: number, callback: Function){
    const queryString = `INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code, prom, id_user) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
    db.query(
      queryString,
      [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode, student.prom, id_user],
      (err, result) => {
        if (err) {callback(err, null)};
        console.log(result);
        const insertId = (<OkPacket> result).insertId;
        callback(null, insertId);
      }
    );
  };

function findAllStudents(callback:Function){
  const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
  db.query(queryString, (err, result)=>{
    if(err) callback(err, null);

    const students = result;
    callback(null, students);
  } )
};

function findOneStudent(id: string, callback: Function){
 
  const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student WHERE id = ?";
  db.query(queryString, [id], (err, result)=>{
    if(err){ callback(err, null)};
    
    const studentFound: Student = (<RowDataPacket>result)[0];
    callback(null, studentFound);
  })
};

async function findOneStudentForPatch (id: string){
  
  const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student WHERE id = ?";
  const connection = await mysqlPromise.createConnection(connectionData);
  const result = await connection.execute(queryString, [id]);
  return result;
}

function deleteOneStudent(id: string, callback: Function){
  const queryString = "DELETE FROM student WHERE id = ?";
  db.query(queryString, [id], (err, result)=>{
    if(err){ callback(err, null)};
    
    const studentDeleted:String = "deleted succesfull";
   
    callback(null, studentDeleted);
  })
};

function putOneStudent(id: string, student: Student, callback: Function){

    const queryString = "UPDATE student SET name=?, first_surname=?, second_surname=?, email_personal=?, email_activa=?, phone_number=?, zip_code=? WHERE id=?";
    db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode, id],
      (err, result)=>{
        if(err){ callback(err, null)};
        
        const studentUpdated:String = "update succesfull";
       
        callback(null, studentUpdated);
      })
  };

function patchStudent(id: string, updatedData: LooseObject, callback:Function){
      const queryString = buildPatchQuery("student", id, updatedData);
      if (queryString){
        db.query(queryString, 
          (err, result)=>{
            if(err){ callback(err, null)};
            
            const studentUpdated:String = "update succesfull";
           
            callback(null, studentUpdated);
          })
      }
     
};


export {createStudent, findAllStudents, findOneStudent, deleteOneStudent, putOneStudent, patchStudent, findOneStudentForPatch};