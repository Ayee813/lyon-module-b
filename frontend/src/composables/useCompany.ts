
import { onMounted, ref } from 'vue'
import axios from 'axios'

const api_URL = 'http://localhost:3001/companies'

export function useCompanies() {

    const companies = ref<any[]>([])

    const fethData = async () => {
        try {
            const response = await axios.get(api_URL)
            companies.value = response.data
            console.log(companies);
            
        } catch (error) {
            console.error("fetch data error: ", error);
        }
    }

    onMounted(fethData)
    return {companies}
}