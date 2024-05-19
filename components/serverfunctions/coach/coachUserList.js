import { createClient } from '@/utils/supabase/server';
import fetchCoach from './fetchCoach'

export default async function coachUserList() {
    let classData = []
    let codeData = []
    
    let viewClassData = []
    let viewStudentData = []

    let nameCodeMasterData = []
    let masterData = []

    let classCopy = Object.assign({}, await fetchCoach('coach_codes'));
    
    // Getting the number of classes a coach has

    // console.log(classCopy)


    Object.entries(classCopy).map((row) => {
        let nameCodeData = []

    const classesObject = {
        id: row[1].code,
        label: row[1].class_name,
        children: null
    }
    const viewClass = {
      id: `${row[1].code}class`,
      label: "View Class",
    }
    const viewStudents = {
        id: `${row[1].code}student`,
        label: 'View Students',
        children: null
    }
    viewClassData.push(viewClass);
    viewStudentData.push(viewStudents);
    codeData.push(row[1].code)
    nameCodeData.push(row[1].code)
    nameCodeData.push(row[1].class_name)
    nameCodeMasterData.push(nameCodeData);
    classData.push(classesObject);
    })
    masterData.push(codeData);
    // Creating an object for each class that gets pushed to the overall classData array

    // We want to now fetch the data for all the users that are in each of these classes
    // Designated by the codes stored in the classData array
    const supabase = createClient();

    for(let i = 0; i < classData.length; i++){
        let childrenArray = []

        const { data, error } = await supabase
            .from('profiles')
            .select()
            .eq("class_codes", classData[i].id)
            .order('created_at', { ascending: true });

        data.map((row) => {
            const label = `${row.first_name} ${row.last_name}`

            const userData = {
                id: row.id,
                label: label
            }
            childrenArray.push(userData)
        })

        let muiDataArray = []

        muiDataArray.push(viewClassData[i])

        if(childrenArray[0]) {
            muiDataArray.push(viewStudentData[i])
            // muiDataArray[1].children = childrenArray
            // UNDO THIS IF NECESSARY 5/18/2024
        }
        classData[i].children = muiDataArray
        
        
    }
    masterData.push(classData);
    masterData.push(nameCodeMasterData);

    // console.log(masterData)

    return masterData;
    

    // fetch (.eq by rows with coach code stored in each data array element)
    
    // const individualUser = {
    //   id: data
    // }
    // we will need to use the user's uuid for the 'id' in children and their email (temporarily)
    // for the 'label'

    // begin by mapping for each class so that users are added based 
    // on the count for the class we are on 
    // we need to create a new array so that when we map the object we receive
    // from the fetch, we can push the attributes to a new object and push it to the 
    // array that will be received in the children prop
}

