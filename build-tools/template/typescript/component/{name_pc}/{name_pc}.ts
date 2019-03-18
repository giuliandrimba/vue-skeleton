import { Vue, Component, Prop } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
{{#if components}}
{{#each components}}
import {{this}} from '../{{this}}';
{{/each}}
{{/if}}
@Component({{#if components}}{
  components: {
    {{#each components}}
    {{this}},
    {{/each}}
  },
}{{/if}})
export default class {{name_pc}} extends Vue {
  {{#if props}}
    {{#each props}}
  @Prop() {{this}}: any;
    {{/each}}
  {{/if}}
  {{#if lifecycle}}
  public beforeCreate(): void {}
  public created(): void {}
  public beforeMount(): void {}
  public mounted(): void {}
  public beforeUpdate(): void {}
  public updated(): void {}
  public beforeDestroy(): void {}
  public destroyed(): void {}
  {{/if}}
}
