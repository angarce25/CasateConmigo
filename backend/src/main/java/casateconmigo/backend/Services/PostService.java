package casateconmigo.backend.Services;

import java.util.List;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import casateconmigo.backend.Models.Posts;
import casateconmigo.backend.Repository.PostRepository;

@Service
public class PostService {

    PostRepository repository;

    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public List<Posts> getAll() {
        List<Posts> posts = repository.findAll();
        return posts;
    }

    public Posts getByName(@NonNull String name) {
        Posts posts = repository.findByName(name);

        return posts;
    }
}
