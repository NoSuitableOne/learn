import * as React from 'react';

function getExclamationMarks(num: number) {
    return Array(num + 1).join('!');
}

export interface Props {
    name: string,
    enthusiasmLevel?: number
}

// function Hello({ name, enthusiasmLevel = 1 }: Props) {
//     if (enthusiasmLevel <= 0) {
//         throw new Error('You could be a little more enthusiastic. :D');
//     }
//
//     return (
//       <div>
//           Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     );
// }

class Hello extends React.Component<Props, object> {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D')
        }

        return (
            <div className='hello'>
                <div className='greeting'>
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
            </div>
        );
    }
}

export default Hello;
