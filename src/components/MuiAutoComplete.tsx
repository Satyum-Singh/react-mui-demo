import {Stack,Autocomplete,TextField} from '@mui/material'
import {useState} from 'react'

type Skill={
    id:number
    label:string
}
const skills=['Java','Javascript','C++','React JS','Djangoa']


const skillOption=skills.map((Skill,index)=>({
    id:index+1,
    label:Skill,
}))


export const MuiAutoComplete = () => {


    const [value, setvalue] = useState<string | null>(null)
    const [skill, setskill] = useState<Skill | null>(null)
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setvalue(newValue)}
        freeSolo
      />

      <Autocomplete
        options={skillOption}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        // onChange={(event: any, newSkill: Skill | null) => setskill(newSkill)}
        freeSolo
      />
    </Stack>
  );
}

