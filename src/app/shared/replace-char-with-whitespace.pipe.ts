import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'whitespaceReplacer'
})
export class WhitespaceTransformer implements PipeTransform{
    transform(value: string, character:string) {
        return value.replace(character,' ');
    }

}