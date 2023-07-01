import { useQuery } from "@tanstack/react-query";

const useSkills = () => {

    const {data: skills = []} = useQuery(['skills'], async() => {
        const res = await fetch('https://porfolio-server-flame.vercel.app/skills')
        return res.json();
    })
    return [skills]
};

export default useSkills;