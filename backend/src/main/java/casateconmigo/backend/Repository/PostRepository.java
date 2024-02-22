package casateconmigo.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import casateconmigo.backend.Models.Posts;

public interface PostRepository extends JpaRepository<Posts, Long> {

    public Posts findByName(String name);

}
