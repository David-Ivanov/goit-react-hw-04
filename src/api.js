import axios from "axios";

export const fetchPhotos = (query, page = 1) => {
    return axios.get('https://api.unsplash.com/search/photos/', {
        params: {
            client_id: 'PhtywgjiZ-h8EfbQDx4eSG98pIjMMVXEnfnr_KgCXdg',
            query,
            page,
            per_page: 12,
            orientation: "landscape"
        }
    })
}
