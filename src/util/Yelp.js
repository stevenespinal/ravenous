const apiKey = "wEH5NhY8PDgK1bEV_VsawQiq2MiBebAutuU5ADhjwtVvmwR0o6R26EDMAO3-WLTh3iG2wjDX4ZPsvK4zc1WZ6Vxo0zdOM0GX9F_MRMnC-BQn4wPIvjJHsN4hR-E1XnYx";

const Yelp = {
  search: (term, location, sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(res => {
      return res.json();
    }).then(jsonRes => {
      if (jsonRes.businesses) {
        return jsonRes.businesses.map((business => {
          // console.log(business);
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0],
            rating: business.rating,
            reviewCount: business.review_count
          };
        }))
      }
    })
  }
};

export default Yelp;