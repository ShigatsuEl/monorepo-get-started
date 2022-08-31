# Monorepo(Yarn)

yarn workspaces 필드를 사용해 간단히 모노레포를 구성할 수 있다.

1.  worktree 선언

    worktree를 구성하는 workspace의 위치를 glob 패턴의 배열로 나타낸다. 예를 들어 packages 폴더 내의 모든 폴더가 workspace가 되도록 하려면 다음과 같이 설정한다.

    ```json
    {
        "private": true,
        "workspaces": ["packages/*"]
    }
    ```

2.  workspace 추가

    packages 폴더 내에 여러 개의 workspace를 추가할 수 있다. 각 workspace는 package.json을 가지게 된다.

3.  workspace에 대한 명령 실행

    `yarn workspace <WORKSPACE_NAME> <COMMAND_NAME>`

4.  workspace를 의존성으로 추가

    workspace에 대한 명령 실행을 함으로서 workspace 간에 의존성을 추가할 수 있다.

    `yarn workspace client add common@1.0.0` | `yarn workspace client run start`

5.  workspace 의존 관계 확인

    `yarn workspaces info`

6.  모든 workspace에 대해 명령 실행

    `yarn workspaces run start` (workspace가 아님을 주의!)
