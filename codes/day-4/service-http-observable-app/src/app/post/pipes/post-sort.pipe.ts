import { Pipe, PipeTransform } from "@angular/core";
import { Post } from "../../models/post";

@Pipe({
    name: 'sortPosts'
})
export class PostSortPipe implements PipeTransform {
    transform(value: Post[], ...args: number[]): Post[] {
        if (value.length > 0 && args[0] && args[0] > 0) {
            switch (args[0]) {
                case 1:
                    value.sort(
                        (p1, p2) => p1.id - p2.id
                    )
                    break;

                case 2:
                    value.sort(
                        (p1, p2) => p1.title
                            .toLocaleLowerCase()
                            .localeCompare(
                                p2.title.toLocaleLowerCase()
                            )
                    )
                    break;

                default:
                    value.sort(
                        (p1, p2) => p1.id - p2.id
                    )
                    break;
            }
            return value
        } else
            return value
    }

}