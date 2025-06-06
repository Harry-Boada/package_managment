export interface Experience {
  id: number
  comment: string
  name: string
  location: string
  image: string
}

// Función para obtener las experiencias
export async function fetchExperiences(): Promise<Experience[]> {
  const usersRes = await fetch('https://dummyjson.com/users')
  const usersData = await usersRes.json()

  const commentsRes = await fetch('https://dummyjson.com/comments')
  const commentsData = await commentsRes.json()

  // Sacar 10 priomeros comentarios y crear un objeto Experience 

  return commentsData.comments.slice(0, 10).map((comment: any, index: number): Experience => {
    const user = usersData.users[index % usersData.users.length] // Validación que haya la misma cantidad de usuarios que comentarios
    return {
      id: comment.id,
      comment: comment.body,
      name: `${user.firstName} ${user.lastName}`,
      location: `${user.address.city}, ${user.address.state}`,
      image: `https://i.pravatar.cc/150?img=${user.id}`
    }
  })
}
