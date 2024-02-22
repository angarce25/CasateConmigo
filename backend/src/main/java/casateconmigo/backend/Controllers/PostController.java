package casateconmigo.backend.Controllers;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import casateconmigo.backend.Models.Posts;
import casateconmigo.backend.Services.PostService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping(path = "${api-endpoint}/posts")
public class PostController {

    PostService service;

    public PostController(PostService service) {
        this.service = service;
    }

    @GetMapping(path = "")
    public List<Posts> index() {
        List<Posts> posts = service.getAll();
        return posts;
    }

    @GetMapping(path = "/{name}")
    public ResponseEntity<Posts> show(@NonNull @PathVariable("name") String name) {
        Posts posts = service.getByName(name);

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(posts);
    }
}