import { useQuery } from "@tanstack/react-query";

const useSkills = () => {

    const {data: skills = []} = useQuery(['skills'], async() => {
        const res = await fetch('http://localhost:5000/skills')
        return res.json();
    })
    return [skills]
};

export default useSkills;