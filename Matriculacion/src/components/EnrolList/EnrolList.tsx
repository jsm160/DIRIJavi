import "./EnrolList.css";
import { DetailsList, IColumn } from "@fluentui/react/lib/DetailsList";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { Student } from "../../entites/Students";
import { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid"; // Importación correcta de uuid

initializeIcons(); // Requerido por FluentUI

interface EnrolListProps {
  students: Student[]; // Lista completa de estudiantes
  onStudentRemoved: (student: Student) => void;
  onStudentEditing: (student: Student) => void;
}

function EnrolList(props: EnrolListProps) {
  const [items, setItems] = useState<Student[]>([]);

  const columns: IColumn[] = [
    {
      key: "fname",
      name: "Nombre",
      fieldName: "firstName",
      minWidth: 90,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "lname",
      name: "Apellidos",
      fieldName: "lastName",
      minWidth: 90,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "program",
      name: "Estudios",
      fieldName: "program",
      minWidth: 60,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "actions",
      name: "Acciones",
      fieldName: "actions",
      minWidth: 100,
      maxWidth: 150,
      isResizable: true,
      onRender: (item: Student) => (
        <div>
          <MdEdit
            style={{ cursor: "pointer", marginRight: "10px" }}
            onClick={() => handleEdit(item)}
          />
          <MdDelete
            style={{ cursor: "pointer" }}
            onClick={() => handleDelete(item)}
          />
        </div>
      ),
    },
  ];

  const handleDelete = (item: Student) => {
    // Eliminamos directamente del estado local (sin depender de `props.students`)
    setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  
    // Notificamos al padre sobre la eliminación
    props.onStudentRemoved(item);
  };

  const handleEdit = (item: Student) => {
    props.onStudentEditing(item);
  };

  useEffect(() => {
    if (props.students && Array.isArray(props.students)) {
      setItems((prevItems) => {
        // Añadimos los estudiantes nuevos o actualizamos existentes desde props.students
        const itemsMap = new Map(prevItems.map((item) => [item.id, item]));
  
        props.students.forEach((student) => {
          if (!student.id) {
            const newStudent = { ...student, id: uuidv4() };
            itemsMap.set(newStudent.id, newStudent);
          } else {
            itemsMap.set(student.id, student);
          }
        });
  
        return Array.from(itemsMap.values());
      });
    }
    // Este efecto se ejecuta solo al montarse o si `props.students` cambia significativamente
    // Nota: Si `props.students` es estable y no muta directamente, esto evitará comportamientos no deseados.
  }, [props.students]);
  

  
  

  return (
    <div className="enrolList">
      <DetailsList items={items} columns={columns} />
    </div>
  );
}

export default EnrolList;
